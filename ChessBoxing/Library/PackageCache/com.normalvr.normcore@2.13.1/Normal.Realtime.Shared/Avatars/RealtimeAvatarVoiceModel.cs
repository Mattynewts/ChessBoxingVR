using Normal.Realtime;
using Normal.Realtime.Serialization;

namespace Normal.Realtime {
    [RealtimeModel]
    public partial class RealtimeAvatarVoiceModel {
        [RealtimeProperty(1, true, true)] private int _clientID = -1;
        [RealtimeProperty(2, true, true)] private int _streamID = -1;
    }
}

#if !UNITY_2021_1_OR_NEWER
namespace Normal.Realtime {
    public partial class RealtimeAvatarVoiceModel : RealtimeModel {
        public int clientID {
            get {
                return _clientIDProperty.value;
            }
            set {
                if (_clientIDProperty.value == value) return;
                _clientIDProperty.value = value;
                InvalidateReliableLength();
                FireClientIDDidChange(value);
            }
        }

        public int streamID {
            get {
                return _streamIDProperty.value;
            }
            set {
                if (_streamIDProperty.value == value) return;
                _streamIDProperty.value = value;
                InvalidateReliableLength();
                FireStreamIDDidChange(value);
            }
        }

        public delegate void PropertyChangedHandler<in T>(RealtimeAvatarVoiceModel model, T value);
        public event PropertyChangedHandler<int> clientIDDidChange;
        public event PropertyChangedHandler<int> streamIDDidChange;

        public enum PropertyID : uint {
            ClientID = 1,
            StreamID = 2,
        }

#region Properties

        private ReliableProperty<int> _clientIDProperty;

        private ReliableProperty<int> _streamIDProperty;

#endregion

        public RealtimeAvatarVoiceModel() : base(null) {
            _clientIDProperty = new ReliableProperty<int>(1, _clientID);
            _streamIDProperty = new ReliableProperty<int>(2, _streamID);
        }

        protected override void OnParentReplaced(RealtimeModel previousParent, RealtimeModel currentParent) {
            _clientIDProperty.UnsubscribeCallback();
            _streamIDProperty.UnsubscribeCallback();
        }

        private void FireClientIDDidChange(int value) {
            try {
                clientIDDidChange?.Invoke(this, value);
            } catch (System.Exception exception) {
                UnityEngine.Debug.LogException(exception);
            }
        }

        private void FireStreamIDDidChange(int value) {
            try {
                streamIDDidChange?.Invoke(this, value);
            } catch (System.Exception exception) {
                UnityEngine.Debug.LogException(exception);
            }
        }

        protected override int WriteLength(StreamContext context) {
            var length = 0;
            length += _clientIDProperty.WriteLength(context);
            length += _streamIDProperty.WriteLength(context);
            return length;
        }

        protected override void Write(WriteStream stream, StreamContext context) {
            var writes = false;
            writes |= _clientIDProperty.Write(stream, context);
            writes |= _streamIDProperty.Write(stream, context);
            if (writes) InvalidateContextLength(context);
        }

        protected override void Read(ReadStream stream, StreamContext context) {
            var anyPropertiesChanged = false;
            while (stream.ReadNextPropertyID(out uint propertyID)) {
                var changed = false;
                switch (propertyID) {
                    case (uint)PropertyID.ClientID: {
                        changed = _clientIDProperty.Read(stream, context);
                        if (changed) FireClientIDDidChange(clientID);
                        break;
                    }
                    case (uint)PropertyID.StreamID: {
                        changed = _streamIDProperty.Read(stream, context);
                        if (changed) FireStreamIDDidChange(streamID);
                        break;
                    }
                    default: {
                        stream.SkipProperty();
                        break;
                    }
                }
                anyPropertiesChanged |= changed;
            }
            if (anyPropertiesChanged) {
                UpdateBackingFields();
            }
        }

        private void UpdateBackingFields() {
            _clientID = clientID;
            _streamID = streamID;
        }
    }
}
#endif

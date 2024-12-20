using System;
using Normal.Realtime.Native;
using Normal.Realtime.Profiler;

namespace Normal.Realtime.Metrics {
    /// <summary>
    /// Profiler details related to a single Realtime connection session.
    /// </summary>
    public class RealtimeProfilerSession : IRealtimeProfilerSession, IDisposable {
        /// <summary>
        /// The room name of the profiled connection.
        /// </summary>
        public readonly string room;

        /// <summary>
        /// The client ID of the profiled connection.
        /// </summary>
        public readonly int clientID;

        /// <summary>
        /// Cumulative audio stream bytes sent by the Realtime instance.
        /// </summary>
        public uint sentBytesAudioTotal { get; private set; }

        /// <summary>
        /// Cumulative audio stream bytes received by the Realtime instance.
        /// </summary>
        public uint receivedBytesAudioTotal { get; private set; }

        /// <summary>
        /// Cumulative datastore message bytes sent by the Realtime instance. This is not exactly the outgoing bandwidth, since it does not account for padding, fragmentation, or resending by the native plugin.
        /// </summary>
        public uint sentBytesDatastoreTotal { get; private set; }

        /// <summary>
        /// Cumulative datastore message bytes received by the Realtime instance.
        /// </summary>
        public uint receivedBytesDatastoreTotal { get; private set; }

        /// <summary>
        /// Cumulative RPC message bytes sent by the Realtime instance.
        /// </summary>
        public uint sentBytesRPCTotal { get; private set; }

        /// <summary>
        /// Cumulative RPC message bytes received by the Realtime instance.
        /// </summary>
        public uint receivedBytesRPCTotal { get; private set; }

        /// <summary>
        /// A truncated history of profiler samples.
        /// </summary>
        public readonly RealtimeProfilerBuffer<ProfilingSample> samples;

        public RealtimeProfilerSession(string room, int clientID) {
            this.room = room;
            this.clientID = clientID;

            samples = new RealtimeProfilerBuffer<ProfilingSample>(100);
        }

        public void AppendProfilingSample(ProfilingSample sample) {
            samples.Append(sample);

            sentBytesRPCTotal           += sample.sentBytesRPCChannelReliable           + sample.sentBytesRPCChannelUnreliable;
            sentBytesAudioTotal         += sample.sentBytesAudioChannelReliable         + sample.sentBytesAudioChannelUnreliable;
            sentBytesDatastoreTotal     += sample.sentBytesDatastoreChannelReliable     + sample.sentBytesDatastoreChannelUnreliable;
            receivedBytesRPCTotal       += sample.receivedBytesRPCChannelReliable       + sample.receivedBytesRPCChannelUnreliable;
            receivedBytesAudioTotal     += sample.receivedBytesAudioChannelReliable     + sample.receivedBytesAudioChannelUnreliable;
            receivedBytesDatastoreTotal += sample.receivedBytesDatastoreChannelReliable + sample.receivedBytesDatastoreChannelUnreliable;

            RealtimeProfilerCounters.AppendProfilingSample(sample);
        }

        public void Dispose() {
            samples?.Dispose();
        }
    }
}

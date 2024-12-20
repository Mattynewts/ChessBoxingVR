using Normal.Realtime.Native;
using Unity.Profiling;

namespace Normal.Realtime.Profiler {
    internal static class RealtimeProfilerCounters {
        public static readonly RealtimeProfilerBandwidthModule rpc       = new RealtimeProfilerBandwidthModule("RPC");
        public static readonly RealtimeProfilerBandwidthModule audio     = new RealtimeProfilerBandwidthModule("Audio");
        public static readonly RealtimeProfilerBandwidthModule datastore = new RealtimeProfilerBandwidthModule("Datastore");

        public static readonly RealtimeBandwidthProfilerCounter sentBytesTotal     = new RealtimeBandwidthProfilerCounter("Sent");
        public static readonly RealtimeBandwidthProfilerCounter receivedBytesTotal = new RealtimeBandwidthProfilerCounter("Received");

        public static void AppendProfilingSample(ProfilingSample sample) {
            rpc.Add(
                sample.sentBytesRPCChannelReliable,
                sample.sentBytesRPCChannelUnreliable,
                sample.receivedBytesRPCChannelReliable,
                sample.receivedBytesRPCChannelUnreliable
            );

            audio.Add(
                sample.sentBytesAudioChannelReliable,
                sample.sentBytesAudioChannelUnreliable,
                sample.receivedBytesAudioChannelReliable,
                sample.receivedBytesAudioChannelUnreliable
            );

            datastore.Add(
                sample.sentBytesDatastoreChannelReliable,
                sample.sentBytesDatastoreChannelUnreliable,
                sample.receivedBytesDatastoreChannelReliable,
                sample.receivedBytesDatastoreChannelUnreliable
            );

            sentBytesTotal.Add(
                sample.sentBytesRPCChannelReliable +
                sample.sentBytesRPCChannelUnreliable +
                sample.sentBytesAudioChannelReliable +
                sample.sentBytesAudioChannelUnreliable +
                sample.sentBytesDatastoreChannelReliable +
                sample.sentBytesDatastoreChannelUnreliable
            );

            receivedBytesTotal.Add(
                sample.receivedBytesRPCChannelReliable +
                sample.receivedBytesRPCChannelUnreliable +
                sample.receivedBytesAudioChannelReliable +
                sample.receivedBytesAudioChannelUnreliable +
                sample.receivedBytesDatastoreChannelReliable +
                sample.receivedBytesDatastoreChannelUnreliable
            );
        }
    }

    internal class RealtimeProfilerBandwidthModule {
        public readonly RealtimeBandwidthProfilerCounter sentBytesReliable;
        public readonly RealtimeBandwidthProfilerCounter sentBytesUnreliable;
        public readonly RealtimeBandwidthProfilerCounter receivedBytesReliable;
        public readonly RealtimeBandwidthProfilerCounter receivedBytesUnreliable;

        public RealtimeProfilerBandwidthModule(string prefix) {
            sentBytesReliable       = new RealtimeBandwidthProfilerCounter($"{prefix} Sent (Reliable)");
            sentBytesUnreliable     = new RealtimeBandwidthProfilerCounter($"{prefix} Sent (Unreliable)");
            receivedBytesReliable   = new RealtimeBandwidthProfilerCounter($"{prefix} Received (Reliable)");
            receivedBytesUnreliable = new RealtimeBandwidthProfilerCounter($"{prefix} Received (Unreliable)");
        }

        public void Add(uint sentBytesReliable, uint sentBytesUnreliable, uint receivedBytesReliable, uint receivedBytesUnreliable) {
            this.sentBytesReliable.Add(sentBytesReliable);
            this.sentBytesUnreliable.Add(sentBytesUnreliable);
            this.receivedBytesReliable.Add(receivedBytesReliable);
            this.receivedBytesUnreliable.Add(receivedBytesUnreliable);
        }
    }

    internal class RealtimeBandwidthProfilerCounter {
        /// <summary>
        /// The name of the profiler counter.
        /// </summary>
        public string name;

        /// <summary>
        /// The profiler counter instance.
        /// </summary>
        public ProfilerCounterValue<uint> counter;

        public RealtimeBandwidthProfilerCounter(string name) {
            this.name = name;

            counter = new ProfilerCounterValue<uint>(
                RealtimeProfiler.category, name, ProfilerMarkerDataUnit.Bytes, ProfilerCounterOptions.FlushOnEndOfFrame | ProfilerCounterOptions.ResetToZeroOnFlush
            );
        }

        /// <summary>
        /// Add bytes to the bandwidth profiler counter.
        /// </summary>
        public void Add(uint bytes) => counter.Value += bytes;
    }
}

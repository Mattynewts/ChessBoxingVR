#if UNITY_EDITOR
using Unity.Profiling.Editor;

namespace Normal.Realtime.Profiler {
    [ProfilerModuleMetadata("Normcore")]
    internal class RealtimeProfilerModule : ProfilerModule {
        private static readonly ProfilerCounterDescriptor[] __descriptors = {
            new ProfilerCounterDescriptor(RealtimeProfilerCounters.sentBytesTotal.name,     "Normcore"),
            new ProfilerCounterDescriptor(RealtimeProfilerCounters.receivedBytesTotal.name, "Normcore"),
        };

        public RealtimeProfilerModule() : base(__descriptors) { }
    }

    [ProfilerModuleMetadata("Normcore RPC")]
    internal class RealtimeProfilerRPCModule : ProfilerModule {
        public RealtimeProfilerRPCModule() : base(
            RealtimeProfilerModuleHelpers.CreateDescriptors(RealtimeProfilerCounters.rpc)
        ) { }
    }

    [ProfilerModuleMetadata("Normcore Audio")]
    internal class RealtimeProfilerAudioModule : ProfilerModule {
        public RealtimeProfilerAudioModule() : base(
            RealtimeProfilerModuleHelpers.CreateDescriptors(RealtimeProfilerCounters.audio)
        ) { }
    }

    [ProfilerModuleMetadata("Normcore Datastore")]
    internal class RealtimeProfilerDatastoreModule : ProfilerModule {
        public RealtimeProfilerDatastoreModule() : base(
            RealtimeProfilerModuleHelpers.CreateDescriptors(RealtimeProfilerCounters.datastore)
        ) { }
    }

    internal static class RealtimeProfilerModuleHelpers {
        public static ProfilerCounterDescriptor[] CreateDescriptors(RealtimeProfilerBandwidthModule module) {
            return new ProfilerCounterDescriptor[] {
                new ProfilerCounterDescriptor(module.sentBytesReliable.name,       RealtimeProfiler.category),
                new ProfilerCounterDescriptor(module.sentBytesUnreliable.name,     RealtimeProfiler.category),
                new ProfilerCounterDescriptor(module.receivedBytesReliable.name,   RealtimeProfiler.category),
                new ProfilerCounterDescriptor(module.receivedBytesUnreliable.name, RealtimeProfiler.category),
            };
        }
    }
}

#endif

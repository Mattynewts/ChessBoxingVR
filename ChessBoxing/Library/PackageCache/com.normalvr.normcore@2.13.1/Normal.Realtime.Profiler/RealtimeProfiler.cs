using System.Collections.Generic;
using Normal.Realtime.Metrics;
using Unity.Profiling;
using UnityEngine;

namespace Normal.Realtime.Profiler {
    internal class RealtimeProfiler : IRealtimeProfiler {
        [RuntimeInitializeOnLoadMethod]
        private static void Initialize() {
            // The entire Normal.Realtime.Profiler assembly is conditional on ENABLE_PROFILER, so we can
            // unconditionally inject the profiler instance here knowing that profiling is enabled.

            InjectedRealtimeProfiler.Inject(new RealtimeProfiler());

            DisposeSessions();
        }

        /// <summary>
        /// The profiler sessions of all Realtime connections since entering play mode.
        /// </summary>
        public static IReadOnlyCollection<RealtimeProfilerSession> sessions => __sessions;

        /// <summary>
        /// The privately mutable list of all profiler sessions.
        /// </summary>
        private static readonly List<RealtimeProfilerSession> __sessions = new();

        /// <summary>
        /// Dispose and discard all the sessions in the sessions list.
        /// </summary>
        private static void DisposeSessions() {
            foreach (var session in __sessions) {
                session.Dispose();
            }

            __sessions.Clear();
        }

        public static readonly ProfilerCategory category = new ProfilerCategory("Normcore");

        public bool enabled => UnityEngine.Profiling.Profiler.enabled &&
                               UnityEngine.Profiling.Profiler.IsCategoryEnabled(category);

        /// <summary>
        /// Create a new RealtimeProfilerSession and add it to the static sessions list.
        /// </summary>
        public IRealtimeProfilerSession CreateSession(string room, int clientID) {
            var session = new RealtimeProfilerSession(room, clientID);
            __sessions.Add(session);
            return session;
        }
    }
}

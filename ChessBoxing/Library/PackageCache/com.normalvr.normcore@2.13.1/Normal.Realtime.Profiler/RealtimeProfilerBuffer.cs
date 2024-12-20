using System;
using Unity.Collections;

namespace Normal.Realtime.Profiler {
    /// <summary>
    /// An append-only buffer of fixed capacity that overwrites old values.
    /// </summary>
    public class RealtimeProfilerBuffer<T> : IDisposable where T : unmanaged {
        /// <summary>
        /// The internal data buffer.
        /// </summary>
        private NativeArray<T> _buffer;

        /// <summary>
        /// The capacity of the buffer.
        /// </summary>
        public int capacity => _buffer.Length;

        /// <summary>
        /// The length of the buffer.
        /// </summary>
        public int length => _count;

        /// <summary>
        /// The index of the oldest element in the buffer.
        /// </summary>
        private int _start;

        /// <summary>
        /// The number of elements in the buffer.
        /// </summary>
        private int _count;

        public RealtimeProfilerBuffer(int capacity) {
            _buffer = new NativeArray<T>(capacity, Allocator.Persistent);
            _start = 0;
            _count = 0;
        }

        ~RealtimeProfilerBuffer() {
            Dispose();
        }

        /// <summary>
        /// Get or set an element in the buffer. The oldest entry in the buffer is index 0.
        /// </summary>
        public T this[int i] {
            get {
                return _buffer[(_start + i) % capacity];
            }
            set {
                _buffer[(_start + 1) % capacity] = value;
            }
        }

        /// <summary>
        /// Append an entry to the end of the buffer.
        /// </summary>
        public void Append(T value) {
            var index = (_start + _count) % capacity;

            _buffer[index] = value;

            if (_count < capacity) {
                _count += 1;
            } else {
                _start += 1;
            }
        }

        /// <summary>
        /// Clear the buffer.
        /// </summary>
        public void Clear() {
            _start = 0;
            _count = 0;
        }

        /// <summary>
        /// Dispose the buffer.
        /// </summary>
        public void Dispose() {
            if (_buffer.IsCreated) {
                _buffer.Dispose();
            }
        }
    }
}

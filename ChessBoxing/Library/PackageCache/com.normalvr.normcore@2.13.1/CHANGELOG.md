# Normcore Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.13.1] - 2024-12-02

### Fixed
- Fix `RealtimeModelEvent` and `RealtimeCallbackAttribute` (`OnWillWrite`, `OnDidRead`, etc.) in auto-generated models.

## [v2.13.0] - 2024-11-12

### Added
- Add support for custom model generics (e.g. `class ExampleModel<T1, T2>`)

### Fixed
- In offline mode, `Room.time` now returns the expected value inside the `Realtime.didConnectToRoom` event.

## [v2.12.1] - 2024-10-22

### Fixed
- Improve migration tool for Unity 6.

## [v2.12.0] - 2024-09-27

### Added
- Support for `RigidBody2D` in `RealtimeTransform`.
- Add support for `long` and `ulong` RealtimeProperties.

### Fixed
- Significantly improve performance of `Realtime.Update` in large scenes.
- Stop showing migration window when entering Play Mode after skipping migration.
- Fix incorrect initial icon on app key visibility toggle in `Realtime` component.

### Changed
- Swap icons for show/hide app key in `Realtime` component.

## [v2.11.1] - 2024-09-04

### Fixed
- Fix serialization error in NormcoreProjectSettings.

### Changed
- Rollback "App keys are no longer serialized into assets when making a build to prevent extraction through asset ripper tools." while we fix a serialization issue that affects builds.

## [v2.11.0] - 2024-08-31

### Added
- Add `SnapTo` method to `RealtimeTransform`, which snaps an otherwise interpolated transform to a new position / rotation / scale.
- Add the room name in logs, warnings, and errors from Realtime to make it easier to identify the source of the message.
- Add `OnDidReadModel` callback type, which is invoked whenever the model reads properties from the server regardless of whether the property values were changed.
- Add Project Validation rules to ensure that internet permissions are enabled for XR builds.
- Add a button to show and hide the app key in the Inspector.
- Add option to disable the Normcore welcome message inside of Normcore project settings.

### Fixed
- Fix performance issue where RealtimeView and RealtimeComponent inspectors would repaint every frame in Play Mode.
- Prevent `RealtimeView.RequestOwnershipOfSelfAndChildren` from logging errors for models that don't have a meta-model.
- Fix bug where child models that are not part of a collection could be set to destroy when owner leaves.
- Fix undo/redo operations when clicking on 'Create Avatar Prefab' in RealtimeAvatar component.
- Fix issue where reading or writing to a `StringKeyDictionary` throws an exception if not connected to a room.
- Fix `Room.name` always returning empty string in offline mode.
- Fix NativeArray memory leak when using the Normcore profiler module.
- Fix bug where PlayStation builds would sometimes crash when connecting to a room (SIGPIPE).
- Fix bug with `PreventOwnershipTakeover` updates not getting serialized and sent out.

### Changed
- App keys are no longer serialized into assets when making a build to prevent extraction through asset ripper tools.
- NormcoreProjectSettings are no longer assets in the project view. The settings are accessible form `Edit > Project Settings > Normcore`.

## [v2.10.4] - 2024-06-10

### Fixed
- Fix bug where WebGL builds would throw an exception on connect for certain sets of RoomServerOptions settings.

## [v2.10.3] - 2024-06-04

### Fixed
- Fix Unity.Profiling.Editor reference in Normal.Realtime.Profiler assembly during builds
- Fix missing meta file for Normal.Realtime.Profiler folder

## [v2.10.2] - 2024-05-31

### Fixed
- Fix scene view support in offline mode.
- Fix `StringKeyDictionary` in offline mode.

## [v2.10.1] - 2024-05-30

### Fixed
- Fix issue where `com.unity.profiler.core` could be imported into Unity 2019, where it is unsupported and creates compiler errors.

## [v2.10.0] - 2024-05-30

### Added
- Add Unity Profiler module that shows sent/received bandwidth across audio, datastore, and rpc data channels.
- Add offline mode support to Normcore to allow use of Normcore scenes and prefabs in singleplayer modes, tutorials, and menus. `offlineMode` can now be passed via the `ConnectOptions` struct to `Realtime` and `Room`. All RealtimeComponents are compatible with offline mode.
- Add support for creating webgl builds that work with Normcore Public (audio streams do not work for the time being)

### Fixed
- Fix issue with scene views serializing cross-scene `Realtime` references
- Improve performance of `Room.clientID` which benefits all the different kinds of `isOwnedLocally` and `isOwnedRemotely` functions.

### Changed
- Compile PlayStation native plugin with SDK 8.

## [v2.9.5] - 2024-04-12

### Added
- Add utility methods used by the Normcore Meta Platform package.

## [v2.9.4] - 2024-04-05

### Added
- Welcome message with helpful links

### Fixed
- Fix `RealtimeSet` enumerator yielding incomplete set inside `modelAdded` and `modelRemoved` events.
- Prevent a `NullReferenceException` in `ReadStream.ReadStructBytes` which was being triggered by buffers with an initial value of null. Note: a null `byte[]` will be replicated as `Array.Empty<byte>()`.
- Fix buffer sizes in `ReadStream.ReadStructBytes` so that they always match the length of the buffer that was sent.

## [v2.9.3] - 2024-03-21

### Added
- Add `voiceData` action to `RealtimeAvatarVoice` to allow other components to access microphone data without modifying `RealtimeAvatarVoice`.
- Add option to `RealtimeProperty` to leave out equality check from auto-generated property setter.

### Fixed
- Reduce `ReadStream.ReadStructBytes` memory allocation.

### Changed
- Make the head game object reference optional for `RealtimeAvatar`.
- Make `RealtimeAvatarEditor.CreateAvatarPrefab()` public. Add option not to create placeholder geometry.

## [v2.9.2] - 2024-02-27

### Fixed
- Fix a bug where `RealtimeArray#Count` could be incorrect during the `modelAdded` event.

## [2.9.1] - 2024-02-05

### Fixed
- Fix missing `CheckPluginVersion` symbol on iOS, visionOS, and visionOS Simulator.

## [2.9.0] - 2024-01-31

### Added
- Add `RegionMetadata` struct and matching `region` property on `Room` that includes the IP address of the region being connected to.

## [2.8.0] - 2024-01-28

### Added
- Add RoomServerOptions API which allows for requesting larger capacity room servers.
- Add a native plugin check to avoid bugs caused by not restarting the Unity Editor after updating the native plugin.

### Fixed
- Switch Realtime to use `Time.unscaledDeltaTime` so that scaling time doesn't slow down network updates.

## [2.7.2] - 2024-01-16

### Fixed
- Fix a bug where child scene views could get assigned a scene view UUID in another scene via a prefab reference.

## [2.7.1] - 2024-01-16

### Fixed
- Fix issue where `RealtimeModel` and `RealtimeView` do not fire `ownerIDSelfDidChange` on client requesting ownership.
- Improved documentation around Realtime/Room time value being a linux epoch timestamp.

## [2.7.0] - 2024-01-11

### Added
- Add support for visionOS and visionOS Simulator.
- Add error diagnostic for `RealtimeProperty` names without a leading underscore, which can cause name collisions with the generated model.

## [2.6.4] - 2023-12-13

### Added
- Add a warning to Realtime and `NormcoreAppSettings` inspectors if the app key is not a valid UUID format.

## [2.6.3] - 2023-12-11

### Added
- Add API to request ownership of `RealtimeView` and all child views and components.

### Fixed
- Fix issue where macOS Sonoma would fail to verify code signature of native plugin.

## [2.6.2] - 2023-12-07

### Fixed
- Fix bug where model and collection write stream length could be cached incorrectly causing delta updates on unreliable properties to throw an exception on connections with very high latency.

## [2.6.1] - 2023-10-20

### Fixed
- Fix issue with `RealtimeSet`/`RealtimeArray`/`RealtimeDictionary` returning an incorrect count/enumerator after deserializing a full model.

## [2.6.0] - 2023-10-17

### Added
- Add explicit error diagnostic for invalid model property type, but skip model source generation for that property.

## [2.6.0-rc.3] - 2023-09-28

### Fixed
- Fix issue in Unity 2023 where setting velocity on kinematic rigidbodies creates a warning.

## [2.6.0-rc.2] - 2023-09-27

### Changed
- Updated transport congestion controller to improve packet transport on connections with high packet loss, latency, and jitter.

## [2.6.0-rc.1] - 2023-09-18

### Fixed

- Fix issue where model source gen allows models to use reserved property ID 0. Using property ID 0 will now cause a compiler error.

### Changed

- Add local cache to Realtime collections to improve enumerator performance.

## [2.6.0-rc.0] - 2023-09-06

### Added
- Add ping API to `Realtime` and `Room` classes to fetch the local client's ping.

## [2.5.2]      - 2023-09-11

### Fixed
- Fix issue where iOS builds would reference a missing _ClientGetPing symbol

## [2.5.1]      - 2023-09-08

### Fixed
- Fix issue where model source gen generates incorrect code for OnDidReadProperties callbacks.

## [2.5.0]      - 2023-09-05
## [2.5.0-rc.5] - 2023-09-01

### Fixed
- Fix issue where model source gen fails on autogenerated child models.

## [2.5.0-rc.4] - 2023-08-30

### Added
- Add error diagnostics to model source generators for non-partial classes and duplicate property IDs. `RealtimeModel` source generation will skip model declarations with error diagnostics.

### Fixed
- Fix issue where model source gen fails on empty model classes.

## [2.5.0-rc.3] - 2023-08-04

### Changed
- Update Normcore native plug-in to include performance improvements to congestion control and packet transmission.

## [2.5.0-rc.2] - 2023-06-26

### Added
- In Unity 2021 or newer, replace `RealtimeModel` codegen with Roslyn source generators. This fixes partially deleted `RealtimeModel` properties preventing recompilation of the model.

### Changed
- Rearrange assemblies, move avatar and audio code into respective asmdef assemblies.

## [2.5.0-rc.1] - 2023-06-07

### Fixed
- Fix issue where removing models from `RealtimeSet` would throw a serialization exception if the model has unreliable properties that were updated after the model was removed from the collection, but before the server had confirmed removal.

## [2.5.0-rc.0] - 2023-06-01

### Changed
- Move `RealtimeAvatar` default execution order from -95 to -90 to remove ambiguity with `RealtimeTransform`.
- Mark `Normal.Utility.ExecutionOrder` as obsolete and replace uses with `UnityEngine.DefaultExecutionOrder`.
- Move execution order consts in `RealtimeExecutionOrder` into their respective monobehaviours.

## [2.4.2]      - 2023-05-22
## [2.4.2-rc.3] - 2023-04-12

### Fixed
- Fix performance regression from `RealtimeTransform` incorrectly waking rigidbodies in 2.4.2-rc.2.

## [2.4.2-rc.2] - 2023-03-29

### Fixed
- Fix issue where kinematic and non-kinematic rigidbodies could behave differently on remote clients.

## [2.4.2-rc.1] - 2023-03-28

### Added
- Add PlayStation native plugin.

## [2.4.2-rc.0] - 2023-01-26

### Fixed
- Fix bug where Normcore will log a CloseAudioStream error message on disconnect.

## [2.4.1] - 2022-12-01

### Fixed
- Fix bug where toggleable warning containers could be null after domain reloading.
- Fix crash on M1 Macs when using Normcore with Rosetta. AVX instruction support is now detected at runtime.
- Fix bug where `RealtimeAvatarVoice` will attempt to use echo cancellation on Oculus devices that are using the OpenXR backend.

## [2.4.0]      - 2022-11-09
## [2.4.0-rc.1] - 2022-11-09

### Fixed
- Fix unnecessary garbage allocation in `OnDidReadProperties` model callbacks, including `RealtimeTransformModel`.

## [2.3.2-rc.1] - 2022-09-06

### Fixed
- Fix bug where `RealtimeView` scene view lifetime flags were not correctly migrated from obsolete serialized properties.

## [2.3.1]      - 2022-09-06
## [2.3.1-rc.1] - 2022-08-17

### Fixed
- Fix bug where Unity could initialize Normcore before ScriptableObject Types were properly loaded.

## [2.3.0]      - 2022-07-29
## [2.3.0-rc.4] - 2022-07-19

### Fixed
- Fix bug where `RealtimeTransform` could get initialized incorrectly on remote clients.
- Automatically reject room names that are longer than 512 characters instead of waiting for the server to reject them.

## [2.3.0-rc.3] - 2022-06-13

### Added
- Add toggle in `Window/Normcore/Warnings` to silence warnings about no Realtime instances in the scene.
- Add `RealtimeView#didReplaceAllComponentModels` event, emitted after a view has visited & replaced all of its component models.
- Change position/rotation/scale sync masking on RealtimeTransform to be networked properties.
- Add `RealtimeTransform#SyncPosition(bool)`, `RealtimeTransform#SyncRotation(bool)`, `RealtimeTransform#SyncScale(bool)` for changing the sync mask at runtime.
- Add `RealtimeTransform#isSyncingTransform` and `RealtimeTransform#SyncTransform(bool)` for managing the position/rotation/scale sync masks at the same time.

### Fixed
- Fix bug where unowned rigidbodies never go to sleep.

## [2.3.0-rc.2] - 2022-05-18

### Added
- Expose `ReadStruct`/`WriteStruct` serialization methods for all supported types.

## [2.3.0-rc.1] - 2022-05-09

### Added
- Add `Room.ConnectOptions` API for passing options to connect operations on Realtime and Room.
- Add support for Normcore Private webhooks via the public SDK.
- Expose `ReadStruct`/`WriteStruct` serialization methods for all supported types.

## [2.2.3] - 2022-04-18

### Fixed
- Fix incompatible import in Unity 2021 and newer.

## [2.2.2] - 2022-04-13

### Fixed
- Fix DLL collision issue in Android builds.
- Fix Android arm64 native plugin meta file in Unity 2018.

## [2.2.1] - 2022-04-12

### Added
- Add `RealtimeView#ownerIDSelfDidChange`, `RealtimeComponent<T>#ownerIDSelfDidChange`, and `RealtimeModel#ownerIDSelfDidChange` events.

### Fixed
- Fix bug where negative sbyte could serialize with incorrect length.
- Fix incompatible import in Unity 2021 and newer.

## [2.1.11] - 2022-02-03

### Fixed
- Improve `RealtimeAvatarVoice.Update()` performance by improving the audio encoder locking mechanism in the native plugin.

## [2.1.10] - 2021-10-13

### Fixed
- Fix bug where calling the Room.Connect API directly would result in a null `RealtimePrefabDelegate` implementation instead of the default.

## [2.1.9] - 2021-09-26

### Fixed
- Fix bug where `RealtimeTransform` would set local transform instead of world transform after instantiation.
- Fix race condition where a property update that occurs locally before a previous in-flight update is received would cause the model value to flip back to the in-flight value.

## [2.1.8] - 2021-07-22

### Fixed
- Fix a `ReadStream` exception that could be thrown when two clients attempt to connect to the same room at the exact same time.

## [2.1.7] - 2021-07-17

### Added
- Add support for arm64 / Apple Silicon builds on macOS.

## [2.1.6] - 2021-07-14

### Fixed
- Improve `OnAudioFilterRead` performance for devices with bad memory barrier performance. (namely Oculus Quest 1)
- Tweak Opus DTX settings to be more bandwidth efficient.

## [2.1.5] - 2021-06-02

### Fixed
- Fix bug with double deserialization.

## [2.1.4] - 2021-06-02

### Added
- Add error log if `Realtime#Connect` is called after the Realtime instance as been destroyed.

### Fixed
- Fix bug where instantiating and destroying a realtime prefab before it was confirmed by the server would cause a serialization exception.
- Fix bug in `Realtime.Instantiate()` that would cause destroyWhenX APIs to not function correctly when trying to make objects persist.
- Fix inspector drawing scene view controls on prefab views.

## [2.1.3] - 2021-05-26

### Fixed
- Remove log level DLL variants that were preventing Unity from building on Android.

## [2.1.2] - 2021-05-25

### Fixed
- Fix infinite recursion in `RealtimeViewEditor`.

## [2.1.1] - 2021-05-25

### Fixed
- Fix native bundle issue on Mac.

## [2.1.0] - 2021-05-25

### Added
- Add `RealtimeModel#room` and `RealtimeModel#isRoomConnected` getters for easier room access from models.
- Add `RealtimeView#isPrefabView` and `RealtimeView#isSceneView` getters for checking child views.
- Add `RealtimeView#GetParentView()` and `RealtimeView#GetRootView()` for finding the parent/root views of a view.
- Add `TryGetValue`, `ContainsKey`, and `Contains` to RealtimeDictionary.
- Add `destroyWhenOwnerLeaves` and `destroyWhenLastClientLeaves` to `RealtimeView` and `RealtimeModel`.
- Add new `Realtime.Instantiate` signature with `Realtime.InstantiateOptions` parameter.
- Add error log when lifetime flags are modified on a model with no meta-model.
- Add `joinRoomOnStart` and `roomToJoinOnStart` getters so that applications can query whether `Realtime` is configured to join a room on start.
- Add "Destroy" button to the RealtimeView inspector on the root realtime view of a prefab to make it easier to clean up persistent realtime prefabs.
- Add multi-object editing support to the RealtimeTransform inspector.
- Add inline documentation to all public C# APIs and include XML docs file for C# IDEs.
- Add `IRealtimePrefabLoadDelegate` and `IRealtimePrefabInstantiateDelegate` interfaces to support hooking realtime prefab loading and instantiation.
- Add property serializer classes to simplify autogenerated model code and improve memory/performance.

### Changed
- Change `Realtime#Connect` to go into an error state if the room name or app key is empty.
- Update `RealtimeAvatarVoice` to automatically request microphone permissions on Android.
- Change `RealtimeModel#isPersistent` to use current ownership to determine if it is persistent.
- Realtime collections now throw an error if the child model already exists in the datastore.
- Unsupported versions of `Realtime.Instantiate` and `Realtime.Destroy` now create compiler errors.
- Deprecate `Realtime.Instantiate` overloads that use `destroyWhenOwnerOrLastClientLeaves`.
- Deprecate `destroyWhenOwnerOrLastClientLeaves`, which can cause a scene view to be destroyed while clients are still in the room. The property has been split into `destroyWhenOwnerLeaves` and `destroyWhenLastClientLeaves`. Old clients setting the deprecated property will still work, but they will not see changes from the new properties. Use the new `Realtime.Instantiate` method signature to instantiate prefabs with the split lifetime flags.

### Fixed
- Fix issue with `RealtimeView#destroyWhenOwnerOrLastClientLeaves` not forwarding the setter to the model.
- Fix issue with high CPU usage in `RealtimeAvatarVoice` on Quest and Quest 2.
- Fix issue with `RealtimeSet` where serializing a newly created collection for the first time will only send one item to the server.
- Fix issue where `RealtimeView` on a deeply nested game object could end up as the child to two parent views.
- Fix `StringKeyDictionary` enumerator signature to iterate through string keys instead of internal ID keys.
- Fix issue where calling `Realtime#Connect` inside of `Realtime#didConnectToRoom` event handler would crash Unity.
- Fix issue where datastore snapshots larger than 125kb would prevent a new client from connecting to a room.
- Fix issue where `Realtime` would try to destroy null game objects after scene unloads.
- Fix issue where Normcore 1 migration window would show on new projects.
- Fix `SimpleJSON` to use all `System` namespace types explicitly to avoid conflicts if a type with the same name is defined in the global namespace.
- Fix issue in native plug-in that would cause occasional crashes on macOS when connecting to a room.
- Fix issue where the internal settings asset would throw an exception while the asset database was loading.
- Fix warning in RealtimeAvatarManager about using deprecated API.

### Removed
- Remove public parent constructor from autogenerated `RealtimeModel` code.

## [2.0.3] - 2020-11-13

### Fixed
- Fix exception on `RealtimeSet#modelRemoved` when event is null.
- Fix issue introduced in 2.0.2 with `RealtimeTransform` on scene views not initializing correctly.

## [2.0.2] - 2020-11-09

### Added
- Add `preventOwnershipTakeover` and `destroyWhenOwnerOrLastClientLeaves` properties to `RealtimeView`.
- Add support for macOS 10.13 & 10.14 (High Sierra & Mojave).
- Notarize native plugin on macOS.

### Fixed
- Add Lumin SDK to list of supported platforms for native plugin to fix Magic Leap support.
- Fix null `realtimeView` references on disabled game objects.

## [2.0.1] - 2020-10-26

### Added
- Add "Never Ask Again" option when Normcore alerts you to a new version.

### Fixed
- Fix thread error when a `RealtimeTransform` is garbage collected off the main thread.

## [2.0.0] - 2020-10-16
Initial changelog release.

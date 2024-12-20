using System;
using UnityEngine;
using UnityEditor;
using Normal.Utility;

namespace Normal.Realtime {
    [CustomEditor(typeof(RealtimeAvatar))]
    public class RealtimeAvatarEditor : Editor {
        private const string __createAvatarPrefabLabel = "Create Avatar Prefab";
        private RealtimeAvatar        realtimeAvatar => (RealtimeAvatar)target;
        private SerializedProperty      headProperty => serializedObject.FindProperty("_head");
        private SerializedProperty  leftHandProperty => serializedObject.FindProperty("_leftHand");
        private SerializedProperty rightHandProperty => serializedObject.FindProperty("_rightHand");

        public override void OnInspectorGUI() {
            GUILayout.Space(4);

            // Properties
            serializedObject.Update();

            headProperty.objectReferenceValue      = EditorGUILayout.ObjectField("Head",            headProperty.objectReferenceValue, typeof(Transform), true);
            leftHandProperty.objectReferenceValue  = EditorGUILayout.ObjectField("Left Hand",   leftHandProperty.objectReferenceValue, typeof(Transform), true);
            rightHandProperty.objectReferenceValue = EditorGUILayout.ObjectField("Right Hand", rightHandProperty.objectReferenceValue, typeof(Transform), true);

            GUILayout.Space(4);

            // Create Avatar Prefab
            GUI.enabled = !Application.isPlaying;
            GUILayout.BeginHorizontal();
            if (GUILayout.Button(__createAvatarPrefabLabel))
                CreateAvatarPrefab();
            GUILayout.EndHorizontal();

            serializedObject.ApplyModifiedProperties();

            GUILayout.Space(4);
        }

        public void CreateAvatarPrefab(bool createPlaceholderGeometry = true) {
            Undo.SetCurrentGroupName(__createAvatarPrefabLabel);

            GameObject gameObject = realtimeAvatar.gameObject;

            //// Root
            // RealtimeView
            RealtimeView rootRealtimeView = AddRealtimeViewComponentIfNeeded(gameObject);

            // RealtimeAvatar
            AddComponentToRealtimeViewIfNeeded(rootRealtimeView, realtimeAvatar);

            // RealtimeTransform
            RealtimeTransform rootRealtimeTransform = AddRealtimeTransformComponentIfNeeded(gameObject, true);
            AddComponentToRealtimeViewIfNeeded(rootRealtimeView, rootRealtimeTransform);

            //// Head
            Transform head = CreateGameObjectForPropertyIfNeeded(headProperty, gameObject.transform, "Head", createPlaceholderGeometry, new Type[] { typeof(RealtimeAvatarVoiceScale) });

            // RealtimeView
            RealtimeView headRealtimeView = AddRealtimeViewComponentIfNeeded(head.gameObject);

            // RealtimeTransform
            RealtimeTransform headRealtimeTransform = AddRealtimeTransformComponentIfNeeded(head.gameObject, false);
            AddComponentToRealtimeViewIfNeeded(headRealtimeView, headRealtimeTransform);

            // RealtimeAvatarVoice
            RealtimeAvatarVoice headRealtimeAvatarVoice = head.gameObject.GetComponent<RealtimeAvatarVoice>();
            if (headRealtimeAvatarVoice == null) {
                headRealtimeAvatarVoice = head.gameObject.AddComponentIfNeededWithUndo<RealtimeAvatarVoice>(out _);

                // Collapse inspector
                SetComponentInspectorExpanded(headRealtimeAvatarVoice, false);
            }
            AddComponentToRealtimeViewIfNeeded(headRealtimeView, headRealtimeAvatarVoice);

            //// Left Hand
            Transform leftHand = CreateGameObjectForPropertyIfNeeded(leftHandProperty, gameObject.transform, "Left Hand", createPlaceholderGeometry);

            // RealtimeView
            RealtimeView leftHandRealtimeView = AddRealtimeViewComponentIfNeeded(leftHand.gameObject);

            // RealtimeTransform
            RealtimeTransform leftHandRealtimeTransform = AddRealtimeTransformComponentIfNeeded(leftHand.gameObject, false);
            AddComponentToRealtimeViewIfNeeded(leftHandRealtimeView, leftHandRealtimeTransform);

            //// Right Hand
            Transform rightHand = CreateGameObjectForPropertyIfNeeded(rightHandProperty, gameObject.transform, "Right Hand", createPlaceholderGeometry);

            // RealtimeView
            RealtimeView rightHandRealtimeView = AddRealtimeViewComponentIfNeeded(rightHand.gameObject);

            // RealtimeTransform
            RealtimeTransform rightHandRealtimeTransform = AddRealtimeTransformComponentIfNeeded(rightHand.gameObject, false);
            AddComponentToRealtimeViewIfNeeded(rightHandRealtimeView, rightHandRealtimeTransform);
        }

        private static RealtimeView AddRealtimeViewComponentIfNeeded(GameObject gameObject) {
            RealtimeView realtimeView = gameObject.GetComponent<RealtimeView>();
            if (realtimeView == null) {
                realtimeView = gameObject.AddComponentIfNeededWithUndo<RealtimeView>(out _);

                // Collapse inspector
                SetComponentInspectorExpanded(realtimeView, false);
            }
            return realtimeView;
        }

        private static RealtimeTransform AddRealtimeTransformComponentIfNeeded(GameObject gameObject, bool syncScale) {
            // Check for existing RealtimeTransform
            RealtimeTransform realtimeTransform = gameObject.AddComponentIfNeededWithUndo<RealtimeTransform>(out var found);

            // Initialize if the component was just added
            if (found == false) {
                // Set syncScale
                SerializedObject realtimeTransformSerializedObject = new SerializedObject(realtimeTransform);
                realtimeTransformSerializedObject.Update();
                SerializedProperty syncScaleProperty = realtimeTransformSerializedObject.FindProperty("_syncScale");
                syncScaleProperty.boolValue = syncScale;
                realtimeTransformSerializedObject.ApplyModifiedProperties();

                // Collapse inspector
                SetComponentInspectorExpanded(realtimeTransform, false);
            }

            // Return
            return realtimeTransform;
        }

        private static void AddComponentToRealtimeViewIfNeeded(RealtimeView realtimeView, Component component) {
            SerializedObject realtimeViewSerializedObject = new SerializedObject(realtimeView);
            realtimeViewSerializedObject.Update();

            SerializedProperty realtimeViewComponentsProperty = realtimeViewSerializedObject.FindProperty("_components");

            // Check if the component already exists on the RealtimeView
            int numberOfProperties = realtimeViewComponentsProperty.arraySize;
            int largestPropertyIDSeen = 0;
            for (int i = 0; i < numberOfProperties; i++) {
                SerializedProperty realtimeViewComponentProperty = realtimeViewComponentsProperty.GetArrayElementAtIndex(i);
                SerializedProperty realtimeViewComponentComponentIDProperty = realtimeViewComponentProperty.FindPropertyRelative("componentID");
                SerializedProperty realtimeViewComponentComponentProperty   = realtimeViewComponentProperty.FindPropertyRelative("component");

                // Record the property ID
                largestPropertyIDSeen = realtimeViewComponentComponentIDProperty.intValue;

                // We found the component. We're done.
                if (realtimeViewComponentComponentProperty.objectReferenceValue == component)
                    return;
            }

            // Component not found, add it.
            int newPropertyIndex = realtimeViewComponentsProperty.arraySize;
            realtimeViewComponentsProperty.InsertArrayElementAtIndex(newPropertyIndex);
            SerializedProperty realtimeViewNewComponentProperty = realtimeViewComponentsProperty.GetArrayElementAtIndex(newPropertyIndex);
            SerializedProperty realtimeViewNewComponentComponentIDProperty = realtimeViewNewComponentProperty.FindPropertyRelative("componentID");
            SerializedProperty realtimeViewNewComponentComponentProperty   = realtimeViewNewComponentProperty.FindPropertyRelative("component");
            realtimeViewNewComponentComponentIDProperty.intValue           = largestPropertyIDSeen + 1;
            realtimeViewNewComponentComponentProperty.objectReferenceValue = component;

            realtimeViewSerializedObject.ApplyModifiedProperties();
        }

        private static Transform CreateGameObjectForPropertyIfNeeded(SerializedProperty serializedProperty, Transform parent, string gameObjectName, bool createPlaceholderGeometry, Type[] components = null) {
            Transform transform = serializedProperty.objectReferenceValue as Transform;
            if (transform == null) {
                transform = CreateGameObject(gameObjectName, parent, components);

                if (createPlaceholderGeometry) {
                    GameObject geometry = GameObject.CreatePrimitive(PrimitiveType.Cube);
                    geometry.name = "Geometry";

                    Undo.RegisterCreatedObjectUndo(geometry, Undo.GetCurrentGroupName());

                    Transform geometryTransform = geometry.transform;

                    // TODO: Starting in 2020+ use Undo.SetTransformParent(geometryTransform, transform, false, Undo.GetCurrentGroupName()); instead
                    Undo.SetTransformParent(geometryTransform, transform, Undo.GetCurrentGroupName());
                    geometry.transform.localPosition = Vector3.zero;
                    geometry.transform.localRotation = Quaternion.identity;
                    geometryTransform.localScale = Vector3.one * 0.1f;
                }

                serializedProperty.objectReferenceValue = transform;
            }
            return transform;
        }

        private static Transform CreateGameObject(string name, Transform parent, Type[] components = null) {
            if (components == null)
                components = new Type[0];

            GameObject gameObject = new GameObject(name, components);

            Undo.RegisterCreatedObjectUndo(gameObject, Undo.GetCurrentGroupName());

            Transform transform = gameObject.transform;

            // TODO: Starting in 2020+ use Undo.SetTransformParent(transform, parent, false, Undo.GetCurrentGroupName()); instead
            Undo.SetTransformParent(transform, parent, Undo.GetCurrentGroupName());
            gameObject.transform.localPosition = Vector3.zero;
            gameObject.transform.localRotation = Quaternion.identity;
            gameObject.transform.localScale = Vector3.one;

            return transform;
        }

        private static void SetComponentInspectorExpanded(Component component, bool expanded) {
            // Set expanded
            UnityEditorInternal.InternalEditorUtility.SetIsInspectorExpanded(component, expanded);

            // Refresh selection
            GameObject gameObject = Selection.activeGameObject;
            Selection.activeGameObject = null;
            Selection.activeGameObject = gameObject;
        }
    }
}

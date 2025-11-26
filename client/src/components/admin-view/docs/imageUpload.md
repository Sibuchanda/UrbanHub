## ProductImageUpload
`ProductImageUpload` is a reusable React component that manages image selection and uploading for products. It supports drag-and-drop and click-to-upload functionality, automatically uploads the selected image to the backend, handles loading states, and allows image removal. The component communicates with a backend API to store the image (e.g., Cloudinary) and updates the parent component with the uploaded image URL.
- Parameters
  - `imageFile`: `File | null` – Currently selected image file.
  - `setImageFile`: `Function` – Updates the selected image file state.
  - `uploadedImageUrl`: `string` – Stores the URL of the uploaded image returned by the backend.
  - `setUploadedImageUrl`: `Function` – Updates the uploaded image URL in state.
  - `imageLoadingState`: `boolean` – Indicates whether the image is currently uploading.
  - `setImageLoadingState`: `Function` – Controls the loading state during the upload process.
  - `isEditMode`: `boolean` – Disables upload functionality when set to true.
  - `isCustomStyling`: `boolean` – Enables custom layout styling when true.
- Returns
  - `JSX.Element` : Renders an interactive image upload interface that updates dynamically based on upload status.
---
## handleImageFileChange
`handleImageFileChange` handles image selection from the file input field. It extracts the selected file and updates the component state.
- Parameters
  - `event`: `React.ChangeEvent<HTMLInputElement>` – File input change event containing the selected image.
- Returns
  - `void` : Updates the image file state when a valid file is selected.
---
## handleDragOver
`handleDragOver` enables drag-and-drop functionality by preventing the browser's default behavior when a file is dragged over the upload area.
- Parameters
  - `event`: `DragEvent` – Triggered when a file is dragged over the drop zone.
- Returns
  - `void` : Allows custom drop handling.
---
## handleDrop
`handleDrop` handles the file dropped into the upload area and stores it in state.
- Parameters
  - `event`: `DragEvent` – Drop event containing the dragged file.
- Returns
  - `void` : Updates the selected image file state.
---
## handleRemoveImage
`handleRemoveImage` removes the selected image and resets the file input field.
- Parameters
  - None
- Returns
  - `void` : Clears the image file and resets the input reference.
---
## uploadImageToCloudinary
`uploadImageToCloudinary` uploads the selected image to the backend server using `FormData` and Axios. The backend then forwards the file to Cloudinary and returns the hosted image URL.
- Parameters
  - None
- Returns
  - `Promise<void>` : Updates the uploaded image URL and loading state upon successful upload.
---
## Auto Upload Mechanism
The component uses `useEffect` to automatically trigger the image upload process whenever the selected file changes.
- Trigger
  - Change in `imageFile` state.
- Returns
  - `void` : Automatically uploads the newly selected image.
---
## UI Rendering Logic
The UI changes based on the current state:
- **When no image is selected**: Displays upload icon and instruction text.
- **When image is uploading**: Displays a skeleton loader.
- **When image is selected and uploaded**: Displays file name with an option to remove the image.
---
## Component Workflow
`ProductImageUpload` follows the sequence below:
1. User selects or drags an image
2. Image stored in `imageFile` state
3. `useEffect` detects change
4. Upload request sent to backend
5. Backend uploads file to cloud
6. Image URL returned
7. UI updates with file information
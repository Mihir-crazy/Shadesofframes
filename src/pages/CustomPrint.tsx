import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function CustomPrint() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-semibold leading-7 text-gray-900">Custom Print</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Upload your photo and customize your Polaroid print
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div
                {...getRootProps()}
                className={`mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 ${
                  isDragActive ? 'border-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <input {...getInputProps()} />
                    <span className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600">
                      {isDragActive ? 'Drop your files here' : 'Upload a file or drag and drop'}
                    </span>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Print Options</h2>
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Size</legend>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="size-classic"
                    name="size"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor="size-classic" className="ml-3 text-sm font-medium leading-6 text-gray-900">
                    Classic (3.5" × 4.25")
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="size-wide"
                    name="size"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                  />
                  <label htmlFor="size-wide" className="ml-3 text-sm font-medium leading-6 text-gray-900">
                    Wide (4.25" × 4.25")
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Preview Print
        </button>
      </div>
    </div>
  );
}
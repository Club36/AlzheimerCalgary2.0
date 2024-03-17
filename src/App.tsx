import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes

import ButtonTestRoute from "@/routes/ButtonTestRoute";
import ProfilePictureTest from "./routes/ProfilePictureTestRoute";
import Test from "./routes/Test";
import SearchBarTest from "./routes/SearchBarTestRoute";
import DropdownItem from "@/components/DropdownItem";
import SortDropdownListTestRoute from "@/routes/SortDropdownListTestRoute";
import NavigationTest from "@/routes/NavigationTest";
import TooltipTestRoute from "./routes/TooltipTestRoute";
import InputCodeTest from "@/routes/InputCodeTest";
import ToastTestRoute from "@/routes/ToastTestRoute";
import MediaUploadZoneTestRoute from "@/routes/MediaUploadZoneTestRoute";
import ColorPickerTestRoute from "@/routes/ColorPickerTestRoute";
import InputFieldTestRoute from "./routes/InputFieldTestRoute";
<<<<<<< HEAD
import MemberHeaderTestRoute from "@/routes/MemberHeaderTestRoute";
import { MemberInformation } from "./components/MemberInformation";
=======
>>>>>>> ae629e90f9756ee94511bfd28caff565160a2ed9

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Home</>,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/SearchBarTestRoute",
    element: <SearchBarTest />,
  },
  {
    path: "/testButton",
    element: <ButtonTestRoute />,
  },
  {
    path: "/SortDropdownListTestRoute",
    element: <SortDropdownListTestRoute />,
  },
  {
    path: "/nav-test",
    element: <NavigationTest />,
  },
  {
    path: "/tooltip",
    element: <TooltipTestRoute />,
  },
  {
    path: "/input-code-test",
    element: <InputCodeTest />,
  },
  {
    path: "/upload-file-test",
    element: <MediaUploadZoneTestRoute />,
  },
  {
    path: "/toast-test",
    element: <ToastTestRoute />,
  },
  {
    path: "/color-picker-test",
    element: <ColorPickerTestRoute />,
<<<<<<< HEAD
  },
  {
    path: "/input-field-test",
    element: <InputFieldTestRoute />,
  },
  {
    path: "/member-header-test",
    element: <MemberHeaderTestRoute />,
  },
  {
    path: "/profile-test",
    element: <ProfilePictureTest />,
  },
  {
    path: "/member-information-test",
    element: (
      <div className="flex flex-col gap-y-20 items-center justify-center w-full h-[100vh] bg-slate-400">
        <MemberInformation />
      </div>
    ),
=======
>>>>>>> ae629e90f9756ee94511bfd28caff565160a2ed9
  },
  {
    path:"/input-field-test",
    element: <InputFieldTestRoute />
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
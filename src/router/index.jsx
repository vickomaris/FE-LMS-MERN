import { createBrowserRouter } from 'react-router-dom';
import ManagerHomePage from '../pages/manager/home';
import SignInPage from '../pages/Signin';
import SignUpPage from '../pages/SignUp';
import SuccessCheckoutPage from '../pages/SuccessCheckout';
import LayoutDashboard from '../components/layout';
import ManageCoursePage from '../pages/manager/courses';
import ManageCreateCoursePage from '../pages/manager/create-course';
import ManageCoursesDetailPage from '../pages/manager/course-detail';
import ManageContentCreatePage from '../pages/manager/course-content-create';
import ManageCoursePreviewPage from '../pages/manager/course-preview';
import ManageStudentsPage from '../pages/manager/students';
import StudentPage from '../pages/student/StudentOverview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ManagerHomePage />,
  },
  {
    path: '/manager/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/manager/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/success-checkout',
    element: <SuccessCheckoutPage />,
  },
  {
    path: '/manager',
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: '/manager/courses',
        element: <ManageCoursePage />,
      },
      {
        path: '/manager/courses/create',
        element: <ManageCreateCoursePage />,
      },
      {
        path: '/manager/courses/:id',
        element: <ManageCoursesDetailPage />,
      },
      {
        path: '/manager/courses/:id/create',
        element: <ManageContentCreatePage />,
      },
      {
        path: '/manager/courses/:id/preview',
        element: <ManageCoursePreviewPage />,
      },
      {
        path: '/manager/students',
        element: <ManageStudentsPage />,
      },
    ],
  },
  {
    path: '/student',
    element: <LayoutDashboard isAdmin={false} />,
    children: [
      {
        index: true,
        element: <StudentPage />,
      },
      {
        path: '/student/detail-courses/:id',
        element: <ManageCoursePreviewPage />,
      },
    ],
  },
]);

export default router;

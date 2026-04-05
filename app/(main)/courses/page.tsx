import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
    const coursesData =  getCourses();
    const userProgressData =  getUserProgress();

    const [ courses, userProgress,] = await Promise.all([
        coursesData,
        userProgressData,
    ])    
 
    return(
        <div className="h-full max-w-228px px-3 mx-auto">
            <h1 className ="text-2xl font-bild text-neutral-700">
            Language Courses Page
            </h1>
            <List
            courses={courses}
            activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    )
}

export default CoursesPage;
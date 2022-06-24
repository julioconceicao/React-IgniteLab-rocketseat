import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
query  {
  lessons(orderBy: publishedAt_DESC, stage: PUBLISHED) {
    title
    slug
    availableAt
    lessonType
    id
  }
}

`
interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    console.log(data)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 min-h-screen">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Class Schedule
            </span>

            <div className="flex flex-col gap-8">
                {/* map faz a busca */}
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}

            </div>
        </aside>
    )
}
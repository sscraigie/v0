/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n9oDAQvS79n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function Component() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <aside className="flex flex-col w-full lg:w-64 border-r dark:border-gray-800">
        <div className="flex flex-col items-center justify-center h-20 px-4 border-b dark:border-gray-800">
          <h2 className="text-lg font-semibold">Reading Guide</h2>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <h3 className="px-4 mt-4 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
            Books
          </h3>
          <div className="mt-2">
            <Link
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400"
              href="#"
            >
              <span className="ml-2">Book 1</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400"
              href="#"
            >
              <span className="ml-2">Book 2</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400"
              href="#"
            >
              <span className="ml-2">Book 3</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-400"
              href="#"
            >
              <span className="ml-2">Book 4</span>
            </Link>
          </div>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">365 Day Reading Guide</h2>
          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Book</CardTitle>
                <CardDescription>
                  The current book being read along with the progress.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">Book Title</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Author Name
                </p>
                <div className="mt-2">
                  <div />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Reading Calendar</CardTitle>
                <CardDescription>
                  Calendar view with each day highlighted for reading.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="range" />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

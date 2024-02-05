/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BpqUGiWkj2X
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Reading List
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Progress
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                365 Day Reading Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <GroupedbarChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Current Book
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                alt="Book Cover"
                className="w-full h-32 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "150/200",
                  objectFit: "cover",
                }}
                width="150"
              />
              <div className="text-2xl font-bold">Book Title</div>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <div className="h-full bg-green-500 rounded-full w-1/2" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Recommended Books
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Book Cover"
                    className="w-10 h-12 object-cover"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/50",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="text-lg font-bold">Book Title 1</div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="Book Cover"
                    className="w-10 h-12 object-cover"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/50",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="text-lg font-bold">Book Title 2</div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    alt="Book Cover"
                    className="w-10 h-12 object-cover"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/50",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                  <div className="text-lg font-bold">Book Title 3</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function GroupedbarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  );
}

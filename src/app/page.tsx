"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const GENERATIONS = ["365-reading-guide", "other"];

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl py-3">V0 Components</h1>
      <div className="gap-5 flex ">
        {GENERATIONS.map((generation) => (
          <Link key={generation} href={`/components/${generation}`}>
            <Card>
              <CardHeader>
                <CardTitle>{generation}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardBody, Link } from "@heroui/react";

export const Sidebar: React.FC = () => {
  return (
    <>
      <Card className="h-fit w-full sm:rounded-none sm:border-none sm:shadow-none">
        <CardBody className="p-0">
          <div className="border-divider border-b p-4">
            <h2 className="font-semibold">Oxford 5000 Words</h2>
            <p className="text-small text-default-500">5947 words</p>
          </div>
          <div className="p-2">
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              Oxford Idioms and Phrases
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              Academic Vocabulary
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              IELTS Vocabulary
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              TOEIC Vocabulary
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

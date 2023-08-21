"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";

import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Peugeot3008Info from "./Peugeot3008Info";
import Peugeot2008Info from "./Peugeot2008Info";
import Peugeot5008Info from "./Peugeot5008Info";
import PeugeoDjango from "./PeugeoDjango";

interface Props {
  tabContent: MDXRemoteSerializeResult;
  slug: string;
}

const components = { Image };

const TabContent: FC<Props> = ({ tabContent, slug }): JSX.Element => {
  return (
    <div className="mb-16">
      <Tabs>
        <TabList>
          <Tab>MÔ TẢ</Tab>
          <Tab>THÔNG SỐ KỸ THUẬT</Tab>
        </TabList>

        <TabPanel>
          <div className="prose mt-10 postContent">
            <MDXRemote {...tabContent} components={components} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="py-6 text-[#666] tableContent">
            {slug === "peugeot-2008" ? (
              <Peugeot2008Info />
            ) : slug === "peugeot-3008" ? (
              <Peugeot3008Info />
            ) : slug === "peugeot-5008" ? (
              <Peugeot5008Info />
            ) : slug === "peugeot-django" ? (
              <PeugeoDjango />
            ) : (
              ""
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabContent;

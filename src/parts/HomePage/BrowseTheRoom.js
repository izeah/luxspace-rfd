import fetchData from "helpers/fetchData";
import useAsync from "helpers/hooks/useAsync";
import React, { useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading({ ratio = {} }) {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
    {
      id: 2,
      ratio: {
        default: "1/9",
        md: "2/2",
      },
    },
    {
      id: 3,
      ratio: {
        default: "1/9",
        md: "2/3",
      },
    },
    {
      id: 4,
      ratio: {
        default: "1/9",
        md: "1/4",
      },
    },
  ];

  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`relative card ${
          ratio?.wrapper?.default?.[item.ratio.default]
        } ${ratio?.wrapper?.md?.[item.ratio.md]}`}
        style={{ height: index === 0 ? "180px" : "auto" }}
      >
        <div className="bg-gray-300 rounded-xl w-full h-full">
          <div className={`overlay ${ratio?.meta?.[item.ratio.md]}`}>
            {/* Loading Skeleton basic */}
            {/* <div className="w-24 h-3 bg-gray-400 rounded-full"></div> */}
            <SkeletonTheme
              baseColor="rgb(210, 210, 210, 1)"
              highlightColor="rgb(230, 230, 230, 1)"
              borderRadius={"9999px"}
              duration={0.75}
            >
              <div className="w-32 h-5 mt-1">
                <Skeleton />
              </div>
              <div className="w-32 h-5 mt-1">
                <Skeleton />
              </div>
            </SkeletonTheme>
          </div>
        </div>
      </div>
    );
  });
}

export default function BrowseTheRoom() {
  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetchData({ url: "/api/v1/categories" }));
  }, [run]);

  const ratioClassNames = {
    wrapper: {
      default: {
        "1/9": "col-span-9 row-span-1",
      },
      md: {
        "1/4": "md:col-span-4 md:row-span-1",
        "2/2": "md:col-span-2 md:row-span-2",
        "2/3": "md:col-span-3 md:row-span-2",
      },
    },
    meta: {
      "1/9":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "1/4":
        "left-0 top-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72",
      "2/2":
        "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
      "2/3":
        "inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12",
    },
  };
  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          {isLoading ? (
            <Loading ratio={ratioClassNames} />
          ) : (
            data?.map?.((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`relative card ${
                    ratioClassNames?.wrapper?.default?.[item.ratio.default]
                  } ${ratioClassNames?.wrapper?.md?.[item.ratio.md]}`}
                  style={{ height: index === 0 ? "180px" : "auto" }}
                >
                  <div className="card-shadow rounded-xl">
                    <img
                      src={`/images/content/${item.imageUrl}`}
                      alt={item.name}
                      className="w-full h-full object-cover object-center overlay overflow-hidden rounded-xl"
                    />
                  </div>
                  <div
                    className={`overlay ${
                      ratioClassNames?.meta?.[item.ratio.md]
                    }`}
                  >
                    <h5 className="text-lg font-semibold">{item.name}</h5>
                    <span className="">
                      {item.products} item{item.products > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

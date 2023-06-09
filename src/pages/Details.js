import React, { useEffect } from "react";
import Header from "parts/Header.js";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import { useParams } from "react-router-dom";
import Suggestions from "parts/Details/Suggestions";
import useAsync from "helpers/hooks/useAsync";
import getData from "helpers/fetchData/get";
import Documents from "parts/Documents";
import ErrorMessage from "parts/ErrorMessage";

function LoadingProductDetails() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div className="px-4 relative card group" key={index}>
                    <div
                      className="rounded-xl item bg-gray-300 animate-pulse"
                      style={{ width: "106px", height: "106px" }}
                    ></div>
                  </div>
                ))}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="bg-gray-300 animate-pulse rounded-lg item h-full overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-44 h-10 mt-8 bg-gray-300 animate-pulse rounded-full"></div>
          <hr className="my-8" />

          <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestions() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className="px-3 flex-none"
                  style={{ width: "320px" }}
                  key={index}
                >
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                      <div
                        className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"
                        style={{ width: "287px", height: "150px" }}
                      ></div>
                    </div>
                    <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  const { categoryID, productID } = useParams();
  const { data, isLoading, run, isError } = useAsync();

  useEffect(() => {
    run(getData({ url: `/api/v1/products/${productID}` }));
  }, [run, productID]);

  return (
    <Documents>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories" + categoryID, name: "Kategori" },
          {
            url: "/categories/" + categoryID + "/products/" + productID,
            name: "Details",
          },
        ]}
      />

      {isError ? (
        <ErrorMessage />
      ) : (
        <>
          {isLoading ? (
            <LoadingProductDetails />
          ) : (
            <ProductDetails data={data} />
          )}
          {isLoading ? (
            <LoadingSuggestions />
          ) : (
            <Suggestions data={data?.relatedProducts || []} />
          )}
        </>
      )}

      <Sitemap />
      <Footer />
    </Documents>
  );
}

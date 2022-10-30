import React from "react";
import starsBG from "../img/Stars.jpg";

export default function Services() {
  return (
    <div id="Services">
      <h1 className="text-3xl font-bold uppercase text-orange-600 mb-4">
        Services
      </h1>
      <div className="md:flex md:space-y-0 space-y-4 justify-evenly gap-5 dark:text-white mx-4">
        <div className="block uppercase w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold mb-4">photo</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
            voluptate laudantium sint incidunt nihil consequuntur ducimus ad
            libero quae possimus commodi magni nostrum iste illum, et tempore
            ea, nesciunt fuga.
          </p>
        </div>
        <div className="block uppercase w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold mb-4">video</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            necessitatibus labore alias nostrum ipsa voluptates sit molestiae
            nihil placeat nobis odit dolore quo. Excepturi delectus dicta
            aliquid, vero maxime minus.
          </p>
        </div>
        <div className="block uppercase w-full p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className="text-xl font-bold mb-4">photo and video</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            ipsum unde velit eos corporis accusantium, delectus consectetur et
            consequuntur minus consequatur necessitatibus molestiae temporibus
            cupiditate vero tempore fugiat labore dolorum.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  live: string;
  tags: string[];
}

function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tags,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-10 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image
        className="object-cover"
        src={image}
        alt="Preview"
        width={300}
        height={300}
      />
      <div className="flex flex-col items-center justify-center w-full px-6 py-4">
        <h1 className="text-xl font-medium text-gray-800 dark:text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex mt-4">
          {github && (
            <a
              href={github}
              className="px-2 py-1 mr-2 text-sm font-semibold text-blue-700 bg-gray-200 rounded-full dark:bg-gray-800 "
            >
              Github
            </a>
          )}
          <a
            href={live}
            className="px-2 py-1 mr-2 text-sm font-semibold text-blue-700 bg-gray-200 rounded-full dark:bg-gray-800 "
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

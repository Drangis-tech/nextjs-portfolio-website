import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function handler(req, res) {
  const projectsDirectory = path.join(process.cwd(), "projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      image: data.image,
      description: data.description,
      technologies: data.technologies,
      category: data.category,
      tags: data.tags, // Include the tags here
    };
  });

  res.status(200).json(projects);
}
// Shape of one project entry (matches src/data/projects.json)
export interface Project {
  id: number;
  title: string;   // project name shown on hover
  link: string;    // live demo / GitHub URL
  image: string;   // path to the project photo (put files in public/images/)
  imagePosition?: string; // optional CSS position, for example "center top"
}

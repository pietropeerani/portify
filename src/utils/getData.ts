// getData.ts
export interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  download_url: string;
  type: 'file' | 'dir';
}

export interface Data {
  name?: string;
  lastname?: string;
  mail?: string;
  roles?: Array<string>,
  description?: string,
  "avaible-for-works"?: boolean;
  contacts?: Array<{ label?: string; href?: string }>;
  "works-history"?: Array<{ position?: string; period?: [string, string]; company?: string }>;
}

export function removeComments(content: string): string {
  content = content.replace(/\/\/[^\n]*\n/g, '');  // Remove line comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  return content;
}

export default async function getData(owner: string, repository: string): Promise<Data> {
  const fileName = 'portify.config.json';
  const url = `https://api.github.com/repos/${owner}/${repository}/contents/`;

  localStorage.setItem("lastVisit", JSON.stringify({
    owner: owner,
    repo: repository
  }))


  // !NOTE
  // Uncomment the return statement during development. 
  // If GitHub detects excessive requests, it may temporarily block API calls.
  // return {
  //   "name": "Peter",
  //   "lastname": "Parker",
  //   "roles": ["UX designer", "UI senior"],
  //   "description": "Lorem ipsum description",
  //   "mail": "example@example.com",
  //   "avaible-for-works": true,

  //   "contacts": [
  //     {
  //       "label": "GitHub",
  //       "href": "example.com"
  //     },
  //     {
  //       "label": "Mail",
  //       "href": "mailto:example@example.com"
  //     }
  //   ],

  //   // Works
  //   "works-history": [
  //     {
  //       "position": "UX/UI designer senior",
  //       "period": ["2023", "now"],
  //       "company": "GitHub"
  //     },
  //     {
  //       "position": "UX/UI designer senior",
  //       "period": ["2022", "2023"],
  //       "company": "Apple"
  //     },
  //     {
  //       "position": "UX/UI designer junior",
  //       "period": ["2020", "2022"],
  //       "company": "Google"
  //     }
  //   ]
  // }

  if (!owner || !repository) {
    throw new Error('Owner or repository parameters are missing.');
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching repo contents. Status: ${response.status}`);
  }

  const files: GitHubFile[] = await response.json();
  const jsonFile = files.find((file) => file.type === 'file' && file.name === fileName);

  if (!jsonFile) {
    throw new Error(`${fileName} not found in the repository.`);
  }

  const fileContentResponse = await fetch(jsonFile.download_url);
  if (!fileContentResponse.ok) {
    throw new Error(`Failed to fetch content for ${jsonFile.name}. Status: ${fileContentResponse.status}`);
  }

  let fileContent = await fileContentResponse.text();
  fileContent = removeComments(fileContent);

  return JSON.parse(fileContent);
};
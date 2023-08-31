// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}

    interface Project {
      title: string;
      repoName: string;
      link: string;
      demo: string;
      imgUrl: string;
      tags: string[];
    }
  }
}

export {};

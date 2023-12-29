export const successStoryQuery = ` query AllSuccessStoriesQuery {
    successStoryCollection {
      items {
        sys {
          id
        }
        title
        description
        video {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
  
`
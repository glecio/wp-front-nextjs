import { gql } from "@apollo/client"
import client from "client"
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks"
import { mapMainMenuItens } from "./mapMainMenuItens"


export const getPageStaticProps = async(context) => {
    console.log("CONTEXT:", context)
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/"
    console.log("uri", uri)
    const {data} = await client.query ({
      query: gql`
      query GetHomePage($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
          }
          ... on Property {
            id
            title
            blocks
          }
        }
        acfOptionsMainMenu {
          pageSlug
          pageTitle
          mainMenu {
            callToActionButton {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
  
            menuItens {
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
  
      }`,
      variables: {
        uri,
      }
    })
    // Get all blocks in page
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks)
    console.log("getstaticprops", blocks)
    return {
      props: {
        mainMenuItens: mapMainMenuItens(data.acfOptionsMainMenu.mainMenu.menuItens),
        callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
        blocks
      }
    }
  }
import type {StructureResolver} from 'sanity/structure'

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.document().schemaType(type).documentId(type).title(title))

const documentList = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem().title(title).schemaType(type).child(S.documentTypeList(type).title(title))

const filteredDocumentList = (
  S: Parameters<StructureResolver>[0],
  type: string,
  title: string,
  filter: string
) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.documentTypeList(type).title(title).filter(filter))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Arts Access Mission')
        .child(
          S.list()
            .title('Arts Access Mission')
            .items([
              singleton(S, 'mission', 'Mission Overview'),
              documentList(S, 'grantProgram', 'Funding and Scholarships'),
              documentList(S, 'outreachProgram', 'Arts Outreach Programs'),
              S.listItem()
                .title('Support, Partners and Related Pages')
                .schemaType('landingPage')
                .child(
                  S.list()
                    .title('Support, Partners and Related Pages')
                    .items([
                      filteredDocumentList(
                        S,
                        'landingPage',
                        'Mission Support Pages',
                        '_type == "landingPage" && slug.current match "mission/*"'
                      ),
                      filteredDocumentList(
                        S,
                        'landingPage',
                        'Arts Shows Pages',
                        '_type == "landingPage" && slug.current match "arts-shows/*"'
                      ),
                      filteredDocumentList(
                        S,
                        'landingPage',
                        'General Landing Pages',
                        '_type == "landingPage" && !(slug.current match "*/*")'
                      ),
                      documentList(S, 'landingPage', 'All Support / General Pages')
                    ])
                ),
              singleton(S, 'seasonSeats', 'Season Seats'),
              S.listItem()
                .title('Free Performing Arts Shows')
                .schemaType('event')
                .child(
                  S.documentTypeList('event')
                    .title('Free Performing Arts Shows')
                    .filter('_type == "event" && eventType in ["freeCommunity", "performingArts"]')
                )
            ])
        ),
      S.divider(),
      documentList(S, 'event', 'All Events'),
      documentList(S, 'planVisitTopic', 'Plan Your Visit'),
      S.listItem()
        .title('Story Hub')
        .child(
          S.list()
            .title('Story Hub')
            .items([
              documentList(S, 'story', 'Stories'),
              documentList(S, 'storyTopic', 'Story Topics')
            ])
        ),
      S.divider(),
      singleton(S, 'blocks', 'Reusable Page Blocks'),
      singleton(S, 'navigation', 'Site Navigation'),
      singleton(S, 'forms', 'HubSpot Forms'),
      singleton(S, 'alert', 'Alert Banner'),
      singleton(S, 'settings', 'Site Settings'),
      singleton(S, 'externalRoutes', 'External Route Placeholders')
    ])

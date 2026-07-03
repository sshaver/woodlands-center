import type {StructureResolver} from 'sanity/structure'

const singleton = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.document().schemaType(type).documentId(type).title(title))

const documentList = (S: Parameters<StructureResolver>[0], type: string, title: string) =>
  S.listItem().title(title).schemaType(type).child(S.documentTypeList(type).title(title))

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
              documentList(S, 'landingPage', 'Support, Partners and Related Pages'),
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
              documentList(S, 'storyTopic', 'Story Topics'),
              documentList(S, 'storyPillar', 'Story Pillars')
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

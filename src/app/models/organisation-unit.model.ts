export interface OrganisationUnitChildren {
  lastUpdated: string;
  level: number;
  name: string;
  id: string;
  children: OrganisationUnit[];
}

export interface OrganisationUnit {
  id: string;
  name: string;
  level: number;
  type?: string;
}

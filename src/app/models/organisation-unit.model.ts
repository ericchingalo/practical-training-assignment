export interface OrganisationUnit {
  id: string;
  name: string;
  level: number;
  type?: string;
}

export interface OrganisationUnitChildren {
  id: string;
  lastUpdated: string;
  level: number;
  name: string;
  shortName: string;
  leaf: boolean;
  displayName: string;
  displayShortName: string;
  openingDate: string;
  coordinates: string;
  childern: OrganisationUnit[];
}

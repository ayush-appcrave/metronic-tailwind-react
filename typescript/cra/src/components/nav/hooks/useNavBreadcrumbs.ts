import { useEffect, useState } from 'react';
import { NavBreadcrumbsType } from '../types';
import { NavConfigType } from '../types';
import { useLocation } from "react-router";
import { useMatchPath } from "../../../hooks/useMatchPath";

const useNavBreadcrumbs = (items: NavConfigType, path?: string): NavBreadcrumbsType => {
  

  return [];
};

export { useNavBreadcrumbs };
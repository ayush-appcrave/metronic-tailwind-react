import { useEffect, useState } from 'react';
import { NavBreadcrumbsType, NavConfigType } from '../types';
import { useLocation } from 'react-router';
import { useMatchPath } from '../../../hooks/useMatchPath';

const useNavTitle = (items: NavConfigType, path?: string): NavBreadcrumbsType => {
  return [];
};

export { useNavTitle };

import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { PAGE_BAR_MIN_HEIGHT } from '@/ui/layout/page/PageHeader';
import { RightDrawer } from '@/ui/layout/right-drawer/components/RightDrawer';
import { MOBILE_VIEWPORT } from '@/ui/theme/constants/theme';

import { PagePanel } from './PagePanel';

type RightDrawerContainerProps = {
  children: ReactNode;
};

const StyledMainContainer = styled.div`
  background: ${({ theme }) => theme.background.noisy};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
  height: calc(
    100% - ${({ theme }) => theme.spacing(5)} - ${PAGE_BAR_MIN_HEIGHT}px
  );
  padding-bottom: ${({ theme }) => theme.spacing(3)};
  padding-right: ${({ theme }) => theme.spacing(3)};
  width: 100%;

  @media (max-width: ${MOBILE_VIEWPORT}px) {
    padding-left: ${({ theme }) => theme.spacing(3)};
    padding-bottom: 0;
  }
`;

type LeftContainerProps = {
  isRightDrawerOpen?: boolean;
};

const StyledLeftContainer = styled.div<LeftContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const RightDrawerContainer = ({
  children,
}: RightDrawerContainerProps) => (
  <StyledMainContainer>
    <StyledLeftContainer>
      <PagePanel>{children}</PagePanel>
    </StyledLeftContainer>
    <RightDrawer />
  </StyledMainContainer>
);

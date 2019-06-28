/* @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Box, IBox } from '@stoplight/ui-kit';
import { FunctionComponent } from 'react';
import { DEFAULT_PADDING, GUTTER_WIDTH } from '../consts';
import { useTheme } from '../theme';

export const Row: FunctionComponent<IRow> = props => {
  const { children, level, enableHover, ...rest } = props;
  const styles = rowStyles({ level, enableHover });

  return (
    <Box css={styles} {...rest}>
      {children}
    </Box>
  );
};

export interface IRowProps {
  level?: number;
  enableHover?: boolean;
}

export interface IRow extends IRowProps, IBox {}

export const rowStyles = ({ level, enableHover }: IRowProps) => {
  const theme = useTheme();
  let st = `
    line-height: 1rem;

    &:nth-of-type(even) {
      background-color ${theme.row.evenBg};
      color ${theme.row.evenFg || theme.canvas.fg};
    }
  `
  if (enableHover) {
    st += `
      &:hover {
        background-color ${theme.row.hoverBg};
        color ${theme.row.hoverFg || theme.canvas.fg};
      }
    `
  }

  return [
    {
      ...(level !== undefined && { paddingLeft: DEFAULT_PADDING + GUTTER_WIDTH * level }),
    },
    css(st),
  ];
};

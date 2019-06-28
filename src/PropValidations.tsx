import { safeStringify } from '@stoplight/json';
import { ISchema } from '@stoplight/types';
import * as React from 'react';
import { MutedText } from './common/MutedText';
import { isCombiner } from './util/isCombiner';
import { pickValidations } from './util/pickValidations';
import { useTheme } from './theme';

export const PropValidations: React.FunctionComponent<{ prop: ISchema }> = ({ prop }) => {
  const theme = useTheme();
  if (!isCombiner(prop)) {
    const validations = pickValidations(prop);

    return (
      <>
        {Object.entries(validations).map(([k, v]) => {
          let type = typeof v;

          if (k === 'default' && ['object', 'boolean'].includes(type)) {
            v = safeStringify(v);

            type = typeof v;
          }

          if (type === 'boolean') {
            return (
              <div key={k}>
                <MutedText as="b">{k}:</MutedText> {v.toString()}
              </div>
            );
          }

          if (type !== 'object') {
            let style = ['enum', 'example'].indexOf(k) !== -1 ? theme.propertyKeyStyle : undefined;
            return (
              <div key={k}>
                <MutedText as="b">{k}:</MutedText>
                <span style={style}> {v}</span>
              </div>
            );
          }

          return null;
        })}
      </>
    );
  }

  return null;
};

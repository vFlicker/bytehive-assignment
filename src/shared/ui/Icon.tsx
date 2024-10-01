import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
  className?: string;
  name: IconName;
  size?: IconSize;
}>;

export const enum IconName {
  ChevronRight = 'chevron-right',
  File = 'file',
  Arrow = 'arrow',
  HomeSmile = 'home-smile',
  BarChart = 'bar-chart',
  LineChartUp = 'line-chart-up',
  CurrencyBitcoin = 'currency-bitcoin',
  ShoppingBag = 'shopping-bag',
  ShoppingCart = 'shopping-cart',
  ReceiptCheck = 'receipt-check',
  Truck = 'truck',
  Refresh = 'refresh',
  Bell = 'bell',
}

const enum IconSize {
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export function Icon(props: IconProps) {
  const xlinkHref = `#${props.name}`;

  return (
    <StyledIcon xmlns="http://www.w3.org/2000/svg" {...props}>
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
}

const IconNameToIconSize = {
  [IconName.ChevronRight]: IconSize.ExtraSmall,
  [IconName.File]: IconSize.Small,
  [IconName.Arrow]: IconSize.Medium,
  [IconName.HomeSmile]: IconSize.Medium,
  [IconName.BarChart]: IconSize.Medium,
  [IconName.LineChartUp]: IconSize.Medium,
  [IconName.CurrencyBitcoin]: IconSize.Medium,
  [IconName.ShoppingBag]: IconSize.Medium,
  [IconName.ShoppingCart]: IconSize.Medium,
  [IconName.ReceiptCheck]: IconSize.Medium,
  [IconName.Truck]: IconSize.Medium,
  [IconName.Refresh]: IconSize.Medium,
  [IconName.Bell]: IconSize.Large,
};

const IconSizeToCSS = {
  [IconSize.ExtraSmall]: css`
    width: 16px;
    height: 16px;
  `,
  [IconSize.Small]: css`
    width: 18px;
    height: 18px;
  `,
  [IconSize.Medium]: css`
    width: 20px;
    height: 20px;
  `,
  [IconSize.Large]: css`
    width: 24px;
    height: 24px;
  `,
};

const StyledIcon = styled.svg<IconProps>(({ name, size }) => {
  const defaultIconSize = size || IconNameToIconSize[name];

  return css`
    ${IconSizeToCSS[defaultIconSize]};
  `;
});

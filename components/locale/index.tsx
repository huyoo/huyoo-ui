export interface LocaleItem {
  [key: string]: string;
}

export type LocaleInterface = {
  locale: string;
  [key: string]: string | LocaleItem;
};

export { default as en_US } from './en_US';

export { default as zh_CN } from './zh_CN';

import type {
  BackgroundColorOption,
  HeightOption,
} from '../lib/BarTypes';
import { backgroundClassName } from '../lib/BarTypes';
import { cnJoin } from '../lib/utils';

type Props = {
  heightClassName: HeightOption;
  backgroundColorOption: BackgroundColorOption;
};
export default function Bar({
  heightClassName,
  backgroundColorOption,
}: Props) {
  return (
    <div
      className={cnJoin(
        heightClassName,
        backgroundClassName[backgroundColorOption],
        'w-6 rounded-lg'
      )}
    />
  );
}

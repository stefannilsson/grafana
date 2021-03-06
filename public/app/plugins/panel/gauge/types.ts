import { Threshold, ValueMapping } from '@grafana/ui';

export interface GaugeOptions {
  baseColor: string;
  decimals: number;
  valueMappings: ValueMapping[];
  maxValue: number;
  minValue: number;
  prefix: string;
  showThresholdLabels: boolean;
  showThresholdMarkers: boolean;
  stat: string;
  suffix: string;
  thresholds: Threshold[];
  unit: string;
}

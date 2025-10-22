import { join } from 'node:path';
import image2avif from '@sweet-milktea/util-tools/image2avif';
import { metaHelper } from '@sweet-milktea/utils';

const { __dirname }: { __dirname: string } = metaHelper(import.meta.url);

image2avif(join(__dirname, '../images/src'), join(__dirname, '../images/dist'), 'sharp');
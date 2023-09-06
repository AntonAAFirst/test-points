import { IPoint, PointStatus, PointType } from "@/shared/types";

export const defaultMatrix: IPoint[][] = Array.from({ length: 20 })
  .fill(1)
  .map((item) => [
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },

    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },

    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },

    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
    { type: PointType.empty, status: PointStatus.absent },
  ]);

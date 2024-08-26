export interface ImageInfo {
    id: number,
    fileName: string,
    type: string,
    imageWidth: number,
    imageHeight: number,
    target: TargetArea
}

export interface TargetArea {
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number
}
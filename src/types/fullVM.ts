import VM, { Disk } from "./vm";
import { v4 } from "uuid";
import validateName from '../utils/validateName';
import isValidInteger from '../utils/isValidInteger';

export default class FullVM extends VM {
  public name = `CI${v4().split("-")[0]}`;
  public diskSize: number = 20;
  public disks = [new Disk(undefined, undefined, this.diskSize, undefined)];

  public get valid(): boolean {
    const { name, diskSize } = this;
    return (
      name !== "" &&
      validateName(name) === undefined &&
      isValidInteger(diskSize)
    );
  }
}

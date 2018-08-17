import {nullFile} from './file';
import Patch, {nullPatch} from './patch';
  isPresent() {
    return this.oldFile.isPresent() || this.newFile.isPresent() || this.patch.isPresent();
  }

  getAdditionRanges() {
      acc.push(...hunk.getAdditionRanges());
  getDeletionRanges() {
      acc.push(...hunk.getDeletionRanges());
  getNoNewlineRanges() {
    const hunks = this.getHunks();
    const lastHunk = hunks[hunks.length - 1];
    if (!lastHunk) {
      return [];
    }

    const range = lastHunk.getNoNewlineRange();
    if (!range) {
      return [];
    }

    return [range];
    if (!this.oldFile.isPresent() || !this.newFile.isPresent()) {
      return false;
    }
    return this.oldFile.isExecutable() && !this.newFile.isExecutable() ||
      !this.oldFile.isExecutable() && this.newFile.isExecutable();
    return Boolean(this.getOldFile().getSymlink() || this.getNewFile().getSymlink());
    if (!this.oldFile.isPresent() || !this.newFile.isPresent()) {
      return false;
    }

    return this.oldFile.isSymlink() && !this.newFile.isSymlink() ||
      !this.oldFile.isSymlink() && this.newFile.isSymlink();
  clone(opts = {}) {
    if (this.patch.getChangedLineCount() === selectedLineSet.size) {
        return this.clone({newFile: this.getOldFile(), patch});
  getStagePatchForHunk(selectedHunk) {
    return this.getStagePatchForLines(new Set(selectedHunk.getBufferRows()));
  getUnstagePatchForLines(selectedLineSet) {
    if (this.patch.getChangedLineCount() === selectedLineSet.size) {
      const patch = this.patch.getFullUnstagedPatch();
        // so when the patch is applied to the index, there file will be removed from the index.
        return this.clone({oldFile: nullFile, patch});
        return this.clone({patch});
      const patch = this.patch.getUnstagePatchForLines(selectedLineSet);
      if (this.getStatus() === 'added') {
        return this.clone({oldFile: this.getNewFile(), patch});
      } else {
        return this.clone({patch});
      }
  getUnstagePatchForHunk(hunk) {
    return this.getUnstagePatchForLines(new Set(hunk.getBufferRows()));
    if (!this.isPresent()) {
      return '';
    }

        newFile: nullFile,

        oldFile: nullFile,

export const nullFilePatch = new FilePatch(nullFile, nullFile, nullPatch);
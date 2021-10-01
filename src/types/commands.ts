export interface commandSet {
  action: string;
  input1?: string;
  input2?: string;
}

export type executionStatus = {
  continue: boolean;
  success: boolean;
  message?: string;
};

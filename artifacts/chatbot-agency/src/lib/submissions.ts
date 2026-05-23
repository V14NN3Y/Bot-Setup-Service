export type SubmissionStatus = "nouveau" | "en_cours" | "livre";

export interface Submission {
  id: string;
  name: string;
  email: string;
  companyType: string;
  message: string;
  date: string;
  status: SubmissionStatus;
}

const KEY = "botagence_submissions";

export function getSubmissions(): Submission[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Submission[]) : [];
  } catch {
    return [];
  }
}

export function addSubmission(data: Omit<Submission, "id" | "date" | "status">): void {
  const submissions = getSubmissions();
  const entry: Submission = {
    ...data,
    id: crypto.randomUUID(),
    date: new Date().toISOString(),
    status: "nouveau",
  };
  localStorage.setItem(KEY, JSON.stringify([entry, ...submissions]));
}

export function updateSubmissionStatus(id: string, status: SubmissionStatus): void {
  const submissions = getSubmissions();
  const updated = submissions.map((s) => (s.id === id ? { ...s, status } : s));
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function deleteSubmission(id: string): void {
  const submissions = getSubmissions().filter((s) => s.id !== id);
  localStorage.setItem(KEY, JSON.stringify(submissions));
}

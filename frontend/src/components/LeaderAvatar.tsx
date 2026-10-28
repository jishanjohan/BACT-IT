import type { Leader } from "@/lib/site-data";

// Headshot when a photo is set, otherwise the initials badge.
export default function LeaderAvatar({ leader, testId, large = false }: { leader: Leader; testId: string; large?: boolean }) {
  const className = `leader-avatar${large ? " leader-avatar-large" : ""}`;
  if (leader.photo) {
    return (
      <img
        src={leader.photo}
        alt={`${leader.name}, ${leader.role}`}
        className={`${className} leader-photo`}
        loading="lazy"
        data-testid={testId}
      />
    );
  }
  return (
    <span className={className} aria-hidden="true" data-testid={testId}>
      {leader.initials}
    </span>
  );
}

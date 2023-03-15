export default function getAvatarUrl(name) {
  return `https://api.dicebear.com/5.x/initials/svg?seed=${name}`;
}

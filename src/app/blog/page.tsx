import Link from "next/link";

export const metadata = {
  title: "Blog | 이태수",
  description: "클라우드 인프라 구축기 및 기술 블로그",
};

const posts = [
  {
    title: "#5 서버 자동화 스크립트로 운영 효율화",
    description: "디스크 모니터링, 로그 정리, DB 백업, Docker 정리를 Cron으로 자동화",
    date: "2026-02-02",
    tags: ["Cron", "Automation", "Bash"],
    url: "https://velog.io/@leelaeloo/클라우드-인프라-구축기-5",
  },
  {
    title: "#4 Nginx로 SSL Labs A+ 달성하기",
    description: "HTTP/2, TLS 1.3, 보안 헤더, SPA 라우팅, 리버스 프록시 설정",
    date: "2026-02-02",
    tags: ["Nginx", "SSL", "Security"],
    url: "https://velog.io/@leelaeloo/클라우드-인프라-구축기-4",
  },
  {
    title: "#3 SSH 브루트포스 5,227건 대응기",
    description: "fail2ban, 포트 변경, 이중 방화벽, Private Subnet 격리로 공격 0건 달성",
    date: "2026-01-19",
    tags: ["Security", "fail2ban", "SSH"],
    url: "https://velog.io/@leelaeloo/클라우드-인프라-구축기-3",
  },
  {
    title: "#2 GitHub Actions로 CI/CD 파이프라인 구축",
    description: "Path 기반 워크플로우 분리, ProxyJump를 통한 Private 서버 자동 배포",
    date: "2026-01-18",
    tags: ["GitHub Actions", "CI/CD", "Docker"],
    url: "https://velog.io/@leelaeloo/클라우드-인프라-구축기-2",
  },
  {
    title: "#1 카카오클라우드 2-Tier 아키텍처 설계",
    description: "VPC 네트워크 설계, Subnet 분리, 보안그룹 구성, 서버 스펙 분석",
    date: "2026-01-18",
    tags: ["KakaoCloud", "VPC", "Infrastructure"],
    url: "https://velog.io/@leelaeloo/클라우드-인프라-구축기-1",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-gray-600 mb-12">
          클라우드 인프라 구축기 및 기술 블로그
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <span className="text-gray-400 text-sm whitespace-nowrap">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <p className="text-gray-600">
            더 많은 글은{" "}
            <Link
              href="https://velog.io/@leelaeloo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold hover:underline"
            >
              Velog
            </Link>
            에서 확인하세요!
          </p>
        </div>
      </div>
    </div>
  );
}

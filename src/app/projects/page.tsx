import Link from "next/link";

export const metadata = {
  title: "Projects | 이태수",
  description: "이태수의 프로젝트 목록입니다.",
};

const projects = [
  {
    title: "MovieSir",
    slug: "moviesir",
    description: "AI 영화 추천 B2B API 서비스",
    role: "인프라 · CI/CD · 보안 담당",
    period: "2025.12 - 2026.02",
    techs: ["KakaoCloud", "Docker", "GitHub Actions", "Nginx", "PostgreSQL"],
    achievements: [
      "VPC Public/Private Subnet 분리 설계",
      "GitHub Actions CI/CD 파이프라인 구축",
      "SSH 브루트포스 5,400건 → 0건 (Bastion Host)",
      "API 응답 시간 ~245ms 달성",
    ],
    github: "https://github.com/Movigation/MovieSir",
    demo: "https://demo.moviesir.cloud",
    thumbnail: "/images/project_images/팀 무비게이션.png",
  },
  // {
  //   title: "MovieSir-Infra",
  //   slug: "moviesir-infra",
  //   description: "서버 설정 및 자동화 스크립트 모음",
  //   role: "인프라 자동화",
  //   period: "2025.01 - 현재",
  //   techs: ["Bash", "Cron", "fail2ban", "Nginx"],
  //   achievements: [
  //     "서버 헬스체크 자동화",
  //     "DB 백업 스크립트 (매일 04시)",
  //     "로그 정리 자동화 (427MB → 16MB)",
  //     "디스크 80% 알림 스크립트",
  //   ],
  //   github: "https://github.com/leelaeloo/MovieSir-Infra",
  // },
  // {
  //   title: "읽어드림",
  //   slug: "senior-ocr",
  //   description: "시니어 친화 OCR PWA 서비스",
  //   role: "인프라 · 백엔드",
  //   period: "2024.11 - 2024.12",
  //   techs: ["Docker", "Nginx", "PostgreSQL", "FastAPI"],
  //   achievements: [
  //     "Docker Compose 기반 배포 환경 구축",
  //     "Nginx SSL 설정 및 리버스 프록시",
  //     "PostgreSQL 데이터베이스 설계",
  //   ],
  //   github: "https://github.com/leelaeloo/Senior-OCR-Project",
  // },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
            >
              {/* 썸네일 */}
              {project.thumbnail && (
                <div className="mb-5">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} 로고`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* 콘텐츠 */}
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {project.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">
                프로젝트 기간: {project.period}
              </p>

              <ul className="space-y-1 text-sm text-gray-600 mb-4">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-1.5">
                    <span className="text-gray-400">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 text-sm pt-4 border-t border-gray-100">
                <span className="flex items-center gap-1.5 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </span>
                {project.demo && (
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

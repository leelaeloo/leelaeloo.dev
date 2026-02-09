import Link from "next/link";

export const metadata = {
  title: "Projects | 이태수",
  description: "이태수의 프로젝트 목록입니다.",
};

const projects = [
  {
    title: "MovieSir",
    slug: "moviesir",
    description: "AI 기반 영화 추천 B2B API 서비스의 인프라 설계 및 운영",
    role: "인프라 · CI/CD · 보안",
    period: "2025.12 - 2026.02",
    team: "5명",
    techs: ["KakaoCloud", "Docker", "GitHub Actions", "Nginx", "PostgreSQL", "Redis", "Let's Encrypt", "fail2ban"],
    highlights: [
      "SSH 공격 5,227 → 0건 차단",
      "SSL Labs A+ 등급",
      "4개 도메인 SSL 단일 서버 운영",
    ],
    github: "https://github.com/Movigation/MovieSir",
    demo: "https://demo.moviesir.cloud",
    thumbnail: "/images/project_images/팀 무비게이션.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Projects</h1>

        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              className="block p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
            >
              {/* 썸네일 */}
              <div className="mb-6">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} 로고`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              {/* 제목 + 상세보기 */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 mt-1">{project.description}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap shrink-0">
                  상세보기 →
                </span>
              </div>

              {/* 메타 정보 */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 mb-4">
                <span>{project.period}</span>
                <span>{project.team}</span>
                <span className="font-medium text-gray-700">{project.role}</span>
              </div>

              {/* 기술 태그 */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* 핵심 성과 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="p-3 bg-gray-50 rounded-lg text-center">
                    <p className="text-sm font-medium text-gray-900">{highlight}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

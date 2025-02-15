"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar } from "@/components/ui/avatar";
import { Settings, Grid, Clock, PlayCircle, AlertCircle, CheckCircle, Menu } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const columns = [
    {
      id: "요청",
      icon: <Clock className="h-4 w-4" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-100"
    },
    {
      id: "진행",
      icon: <PlayCircle className="h-4 w-4" />,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-100"
    },
    {
      id: "지연",
      icon: <AlertCircle className="h-4 w-4" />,
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-100"
    },
    {
      id: "완료",
      icon: <CheckCircle className="h-4 w-4" />,
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-100"
    }
  ];

  const tasks = [
    {
      status: "요청",
      title: "Safebox 신규 Service ID 발급 요청",
      assignee: "김태훈",
      date: "Feb 24, 2025"
    },
    {
      status: "진행",
      title: "Safebox 신규 Service ID 발급 요청",
      assignee: "김태훈",
      date: "Feb 24, 2025"
    },
    {
      status: "지연",
      title: "2025년 1월분 급여자료 확인 요청",
      assignee: "예인세무회계",
      date: "Feb 4, 2025"
    },
    {
      status: "지연",
      title: "2025년 1월 일용사자 정보(임시/일시/시간직, 퇴사자 휴) 확인 요청",
      assignee: "예인세무회계",
      date: "Feb 4, 2025"
    },
    {
      status: "완료",
      title: "면접 진행 확인",
      assignee: "Juno Kwaan",
      date: "오프라인 2/5 오후 2시",
      participants: [
        { name: "Seokmin Lee", avatar: "SL" },
        { name: "Meemang Lee", avatar: "ML" }
      ],
      comment: "오후 2시에 오프라인 면접으로 가능할까요?"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              className="block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Grid className="h-6 w-6" />
            <h1 className="text-xl font-semibold">OfficeMail</h1>
          </div>
          <div className="flex items-center gap-4">
            <Settings className="h-6 w-6 text-gray-500" />
            <Avatar className="h-8 w-8">
              <div className="bg-blue-500 text-white w-full h-full flex items-center justify-center">
                JD
              </div>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <div key={column.id} className="flex flex-col gap-4">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${column.bgColor} ${column.textColor} ${column.borderColor} w-fit sticky top-20 z-[5] bg-opacity-90 backdrop-blur-sm`}>
                {column.icon}
                <span className="text-sm font-medium">{column.id}</span>
              </div>
              <div className="flex flex-col gap-3">
                {tasks
                  .filter((task) => task.status === column.id)
                  .map((task, index) => (
                    <Card key={index} className="p-4 bg-white">
                      <div className="flex items-start gap-4">
                        <Checkbox />
                        <div className="flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm text-gray-500">{task.date}</span>
                          </div>
                          <h3 className="font-medium mb-2 break-words">{task.title}</h3>
                          <div className="text-sm text-gray-600">{task.assignee}</div>
                          {task.participants && (
                            <div className="mt-3">
                              <div className="flex flex-wrap items-center gap-2">
                                {task.participants.map((participant, i) => (
                                  <Avatar key={i} className="h-6 w-6">
                                    <div className="bg-gray-200 text-gray-600 w-full h-full flex items-center justify-center text-xs">
                                      {participant.avatar}
                                    </div>
                                  </Avatar>
                                ))}
                              </div>
                              {task.comment && (
                                <p className="mt-2 text-sm text-gray-600 break-words">{task.comment}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}